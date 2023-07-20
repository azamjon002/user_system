<?php
require_once "assets/php/session.php";
include 'assets/php/header.php'
?>


<div class="container mt-4">
    <div class="alert alert-danger text-center d-flex align-items-center justify-content-between" role="alert">
        <span>Your E-mail is not verified! We've sent you an E-mail Verification link on your E-mail, check & verify now!</span>
        <i data-bs-dismiss="alert" class="fas fa-times" style="cursor:pointer;"></i>
    </div>

    <h4 class="text-center text-primary">
       Write Your Notes Here & Access Anytime Anywhere
    </h4>

    <div class="card border-primary my-5">
        <div class="card-header bg-primary d-flex justify-content-between align-items-center py-3">
            <h5 class="text-light">All Notes</h5>
            <button class="btn btn-secondary rounded-2" type="button" data-bs-toggle="modal" data-bs-target="#create_note">
                <i class="fas fa-plus-circle"></i>
                Add New Note
            </button>
        </div>

        <div class="card-body" id="showNote">

        </div>
    </div>
</div>


<!-- Create Note Modal -->
<div class="modal fade" id="create_note" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="exampleModalLabel">Create Note</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="add-note-form">
                    <input type="text" class="form-control mb-3" name="title" placeholder="Enter Title">
                    <textarea class="form-control mb-3" rows="6" name="note" placeholder="Write Your Note Here"></textarea>
                    <input type="button" class="btn btn-primary w-100" id="addNoteBtn" value="Save Note">
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Edit Note Modal -->
<div class="modal fade" id="edit_note" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-info">
                <h5 class="modal-title text-white" id="exampleModalLabel">Edit Note</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="text" class="form-control mb-3" placeholder="Enter Title">
                <textarea class="form-control mb-3" rows="6" placeholder="Write Your Note Here"></textarea>
                <button type="button" class="btn btn-info w-100">Update Note</button>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.7.0.js"></script>
<script src="https://cdn.datatables.net/1.13.5/js/jquery.dataTables.min.js"></script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>-->
<script>

    $(document).ready(function () {

        $('#addNoteBtn').click(function (e) {
            if ($('#add-note-form')[0].checkValidity()) {
                e.preventDefault();
                $('#addNoteBtn').val('Please Wait...');

                $.ajax({
                    url: 'assets/php/process.php',
                    method: 'POST',
                    data: $('#add-note-form').serialize() + '&action=add_note',
                    success: function (response) {
                        $('#addNoteBtn').val('Save Note');
                        $('#add-note-form')[0].reset();
                        $('#create_note').modal('hide');
                        displayAllNotes();
                    }
                })
            }
        })

        displayAllNotes();

        function displayAllNotes() {
            $.ajax({
                url: 'assets/php/process.php',
                method: 'post',
                data: {action: 'display_notes'},
                success: function (response) {
                    $('#showNote').html(response);
                    $('#example').DataTable({
                        order: [0, 'desc']
                    });
                }
            })
        }
    });
</script>
</body>
</html>
