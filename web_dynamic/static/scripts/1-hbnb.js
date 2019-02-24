$(document).ready(function() {
    let amenitiesObj = {};
    $('input:checkbox').change(function() {
        // if ($(this).is('checked')) {
        if (this.checked) {
            // console.log(this);
            amenitiesObj[$(this).data('id')] = $(this).data('name');
            // console.log(this);
            // alert('working');
        } else {
            delete[$(this).data('id')];
        }
        $('DIV.amenities h4').text(Object.values(amenitiesObj));
    });
});
