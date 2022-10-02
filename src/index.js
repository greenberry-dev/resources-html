fetch('json/channel_resources.json')
  .then(response => response.json())
  .then(data => {
    let html = "";
    data.forEach((item, index) => {
      html += "<tr>";
      html += " <td class='text-center'>" + item.channel_name + "</td>";
      html += " <td class='text-center'>" + item.title + "</td>";
      html += " <td class='text-center'>" + item.kind + "</td>";
      html += " <td class='text-center'>" + item.file_size + "</td>";
      html += "</tr>";
    })
    document.querySelector('table tbody').innerHTML = html;

    $('table').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copyHtml5',
        'excelHtml5',
        'csvHtml5'
      ]
    });
  });