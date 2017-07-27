var jqueryNoConflict = jQuery;

var pymChild = null;

// begin main function
jqueryNoConflict(document).ready(function(){




    // Change google spreadsheet link here

    initializeTabletopObject('https://docs.google.com/spreadsheets/d/1n2PmuLOqi5drt7SGfo8hM11CYECt0ymuXey0jbGPfO0/pubhtml');


});




var width = $('body').width()



// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,
        simpleSheet: true,
        debug: false
    });


}

// create table headers
function createTableColumns(){



    /* swap out the properties of mDataProp & sTitle to reflect
    the names of columns or keys you want to display.
    Remember, tabletop.js strips out spaces from column titles, which
    is what happens with the More Info column header */



    var tableColumns =   [
        {'mDataProp': 'town', 'sTitle': 'Town', 'sClass': 'left'},
        {'mDataProp': 'county', 'sTitle': 'County', 'sClass': 'left'},
        {'mDataProp': 'offense', 'sTitle': 'Offense', 'sClass': 'left'},
        {'mDataProp': 'adjustedpop', 'sTitle': 'Population (2014)*', 'sClass': 'left'},
        {'mDataProp': 'rate', 'sTitle': 'Rate per 1,000', 'sClass': 'left'}
    ];
    return tableColumns;

}


// create the table container and object
function writeTableWith(dataSource){

  

    jqueryNoConflict('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-hover" id="data-table-container"></table>');

    var oTable = jqueryNoConflict('#data-table-container').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': displaylength(width),
        'aaSorting': [[ 4, 'desc' ]],
        "deferRender": true,
        'aaData': dataSource, 
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ <br>records per page'
        }
    });
    
pymChild = new pym.Child(); 



};



function displaylength(bodywidth) {
    if (bodywidth > 450)
    {
        return 25
    }
    else {
        return 10
    }
}



//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort['string-case-asc']  = function(x,y) {
    return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
    return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};
