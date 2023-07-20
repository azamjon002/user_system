<?php
require_once "session.php";
global $current_id;
global $current_user;

if (isset($_POST['action']) && isset($_POST['action']) == 'add_note'){
    $title = $current_user->check_input($_POST['title']);
    $note = $current_user->check_input($_POST['note']);

    $current_user->add_new_note($current_id, $title, $note);
}

if (isset($_POST['action']) && isset($_POST['action']) == 'display_notes'){
    $output = '';

    $notes = $current_user->getNotes($current_id);

    if ($notes){
        $output .= '<table id="example" class="table table-striped" style="width:100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Note</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>';

        foreach ($notes as $note) {
            $output .= ' <tr>
                <td>'.$note['id'].'</td>
                <td>'.$note['title'].'</td>
                <td>'.substr($note['note'], 0, 75).'...</td>
                <td>
                    <div>
                        <i class="fas fa-info-circle text-success mx-1" style="cursor:pointer;"></i>
                        <i class="fas fa-edit text-info mx-1" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#edit_note"></i>
                        <i class="fas fa-trash text-danger mx-1" style="cursor:pointer;"></i>
                    </div>
                </td>
            </tr>';
        }
        $output .= '</tbody>
                </table>';

        echo $output;
    }else{
        echo '<h3 class="text-center text-danger">:( You have not written any note yet. Write your first note now</h3>';
    }
}