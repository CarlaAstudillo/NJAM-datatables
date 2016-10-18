var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){




    // Change google spreadsheet link here

    initializeTabletopObject('https://docs.google.com/spreadsheets/d/1qB6o2ULRvkkBInv88rKGSHCe0Dg8FtUAU_n1WtDqj-U/pubhtml');
    

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
        {'mDataProp': 'countyname', 'sTitle': 'County', 'sClass': 'left'},
        {'mDataProp': 'districtname', 'sTitle': 'District', 'sClass': 'left'},
        {'mDataProp': 'total', 'sTitle': '2010-2011', 'sClass': 'left'},
        {'mDataProp': 'total_6', 'sTitle': '2015-2016', 'sClass': 'left'},
        {'mDataProp': 'difference', 'sTitle': 'Difference', 'sClass': 'left'}
    ];
    return tableColumns;

}


// create the table container and object
function writeTableWith(dataSource){

  

    jqueryNoConflict('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-hover" id="data-table-container"></table>');

    var oTable = jqueryNoConflict('#data-table-container').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': displaylength(width),
        'aaSorting': [[ 4, 'asc' ]],
        "deferRender": true,
        'aaData': dataSource, 
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ <br>records per page'
        }
    });
var pymChild = new pym.Child(); 

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

