var overview_application = document.getElementById('overview-application');
var careers_overview = document.getElementById('careers-overview');

function overview(){
    if(overview_application.style.display === 'none'){
        overview_application.style.display = 'block';
        careers_overview.style.display = 'none';
    }
}
function application(){
    if(careers_overview.style.display === 'none'){
        careers_overview.style.display = 'block';
        overview_application.style.display = 'none';
    }
}