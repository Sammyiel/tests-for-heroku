var selectedRecord = null;
var selectedRecordID = null;
var baseUrl = "http://localhost:5000";

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: baseUrl + "/resource",
        cache: false,
        // crossDomain: true,
        success: function(response) {
            var data = response.data;
            data.forEach((resource) => {
                addRecordToTable(resource);
            });
        }
    });
});

function addRecordToTable(data) {
    var resourcesList = document.getElementById("resourceslist").getElementsByTagName("tbody")[0];
    var newRecord = resourcesList.insertRow(resourcesList.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.resource_id;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.title;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.topic;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = data.author;
    cell5 = newRecord.insertCell(4);
    cell5.innerHTML = data.publication_date;
    cell6 = newRecord.insertCell(5);
    cell6.innerHTML = data.key_words;
    cell7 = newRecord.insertCell(6);
    cell7.innerHTML = data.resource_link;
    cell8 = newRecord.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>&nbsp
                        <a onClick="onDelete(this)">Delete</a>`;
}

function onFormSubmit() {
    var formData = {};
    formData["resource_id"] = document.getElementById("resource_id").value;
    formData["topic"] = document.getElementById("topic").value;
    formData["author"] = document.getElementById("author").value;
    formData["title"] = document.getElementById("title").value;
    formData["publication_date"] = document.getElementById("publication_date").value;
    formData["key_words"] = document.getElementById("key_words").value;
    formData["resource_link"] = document.getElementById("resource_link").value;

    if (selectedRecord == null) {
        saveFormData(formData);
    } else {
        updateFormRecord(formData);
    }
    clearForm();
}

function saveFormData(data) {
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/resource",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function(response) {
            addRecordToTable(response.data);
        }
    });
}

function onEdit(td) {
    selectedRecord = td.parentElement.parentElement;
    selectedRecordID = selectedRecord.cells[0].innerHTML;
    document.getElementById("title").value = selectedRecord.cells[1].innerHTML;
    document.getElementById("topic").value = selectedRecord.cells[2].innerHTML;
    document.getElementById("author").value = selectedRecord.cells[3].innerHTML;
    document.getElementById("publication_date").value = selectedRecord.cells[4].innerHTML;
    document.getElementById("key_words").value = selectedRecord.cells[5].innerHTML;
    document.getElementById("resource_link").value = selectedRecord.cells[6].innerHTML;
}

function updateFormRecord(data) {
    var updateData = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: baseUrl + "/resource/" + selectedRecordID,
        dataType: 'json',
        data: updateData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function() {
            updateTableRecord(data);
        }
    });

}

function updateTableRecord(data) {
    selectedRecord.cells[0].innerHTML = selectedRecordID;
    selectedRecord.cells[1].innerHTML = data.title;
    selectedRecord.cells[2].innerHTML = data.topic;
    selectedRecord.cells[3].innerHTML = data.author;
    selectedRecord.cells[4].innerHTML = data.publication_date;
    selectedRecord.cells[5].innerHTML = data.key_words;
    selectedRecord.cells[6].innerHTML = data.resource_link;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record')) {
        row = td.parentElement.parentElement;
        document.getElementById("resourceslist").deleteRow(row.rowIndex);
        clearForm();
    }

}

function clearForm() {
    document.getElementById("resource_id").value = "";
    document.getElementById("title").value = "";
    document.getElementById("topic").value = "";
    document.getElementById("author").value = "";
    document.getElementById("publication_date").value = "";
    document.getElementById("key_words").value = "";
    document.getElementById("resource_link").value = "";
}