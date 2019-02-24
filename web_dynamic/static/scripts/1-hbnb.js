$(document).ready(function() {
    let amenitiesObj = {};
    $('input:checkbox').change(function() {
        if (this.checked) {
            amenitiesObj[$(this).data('id')] = $(this).data('name');
        } else {
            delete[$(this).data('id')];
        }
        $('DIV.amenities h4').text(Object.values(amenitiesObj));
    });
});
