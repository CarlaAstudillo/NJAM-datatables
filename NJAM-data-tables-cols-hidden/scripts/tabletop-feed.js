var jqueryNoConflict = jQuery;



// begin main function
jqueryNoConflict(document).ready(function(){





    // Change google spreadsheet link here


    // initializeTabletopObject('https://docs.google.com/spreadsheets/d/1qxOZadM-h87Kctn_Golefcsb0ZLTpWmTRHZqDS_bPNU/pubhtml');


// We're using a json to load because Google Sheets was being a little slow
    $.ajax({
  url: "data/data.json",
}).done(function(data) {

    writeTableWith(data)
 
});

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

// // create table headers
// function createTableColumns(){



//     /* swap out the properties of mDataProp to reflect
//     the names of columns in the Google Sheet. Swap out the properties of sTitle for the column title you want displayed. */


//     var tableColumns =   [
//         {'mDataProp': 'County', 'sTitle': 'County', 'sClass': 'left'},
//         {'mDataProp': 'District', 'sTitle': 'District', 'sClass': 'left'},
//         {'mDataProp': '2017-18 Total K-12 Aid', 'sTitle': '2017-18 Total K-12 Aid', 'sClass': 'right'},
//         {'mDataProp': '2018-19 Total K-12 Aid2', 'sTitle': '2018-19 Total K-12 Aid', 'sClass': 'right'},
//         {'mDataProp': 'One Year K-12 Aid Difference', 'sTitle': 'One Year K-12 Aid Difference', 'sClass': 'right'},
//         {'mDataProp': 'Aid Percent Difference', 'sTitle': 'Aid Percent Difference', 'sClass': 'right'}
//     ];
//     return tableColumns;

// }

// create the table container and object
function writeTableWith(dataSource){

    //First, we create column headers. Any column header with the class 'all' will be shown by default, any header with the class 'none' will be hidden by default

    $( "thead" ).append( "<tr><th class='all'></th><th class='all'>Name</th><th class='all'>Diocese</th><th class='all'>Assignments</th><th class='none'>Year Born</th><th class='none'>Year Ordained</th><th class='none'>Number of Victim(s)</th><th class='none'>Status</th></tr>" );


 

//We create the datatable 

    var table = $('#incidents_table').DataTable({
    "deferRender": true,
    "data": dataSource,
    "rowReorder": {
        selector: 'td:nth-child(2)'
    },
    "responsive": {

        // This is where the hidden columns are rendered 
        "details": {
            renderer: function ( api, rowIdx, columns ) {
                var data = $.map( columns, function ( col, i ) {
                  
                    return col.hidden ?
                        '<tr data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                            '<td style="font-weight:bold;">'+col.title+':'+'</td> '+
                            '<td>'+col.data+'</td>'+
                        '</tr>' :
                        '';
                } ).join('');

       var pymChild = new pym.Child(); 
 
                return data ?
                    $('<table/>').append( data ) :
                    false;

            }


        }

    },
    "columns": [{
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": ''
        },
        {
             "data": null,
            render: function(data,type,row, meta) {

                // This is where each column of data is rendered, depending on what it's called in the json. This part renders the first and last name together in the same column. It also displays the first name and last name together but then lets you sort by last name.



                if (type === 'display') {
                    data = '' +
                        data.First_name_MI +
                        ' ' + data.Last_name +
                        '';
                }

                

                else if (type ==='filter') {
                    data = data.First_name_MI + ' ' + data.Last_name;
                }

                else if (type == "sort" || type == 'type') {

                    data = data.Last_name;
                }

                return data;
            },
        },
          {
            'data': "Diocese"
        },
          {
            'data': "Churches"
        },
        {
            // This part renders the year born into a datetime year so we can actually sort
            'data': "Year Born",
            'render': $.fn.dataTable.moment('YY')
        },
        {
            'data': "Year Ordained",
            'render': $.fn.dataTable.moment('YY')
        },
         {
            "data": "Victim Number"
        },
        {
            "data": "Status"
        },
         {
            // Added this so we can default sort the names by last name without making visible
            "data": "Last_name",
            "visible": false
        }
    ],

    "order": [
        [8, 'asc']
    ]
}).on( 'order.dt',  function () {  
       var pymChild = new pym.Child(); 
       } )
        .on( 'search.dt', function () { 
        var pymChild = new pym.Child(); 
 } )
        .on( 'page.dt',   function () { 

        var pymChild = new pym.Child(); 

} )
        .on( 'length.dt',  function () {  
       var pymChild = new pym.Child(); 
       } )



$('#incidents_table').on('click', 'td.details-control', function () {
       
       var pymChild = new pym.Child();  
    });





    $( ".loading" ).hide();


    


 



};

    $('#incidents_table').on( 'draw.dt', function () {
    var pymChild = new pym.Child(); 
} );





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
