# NJAM Data Tables

This is a reusable template for interactive, searchable databases powered through Google Spreadsheets and embedded in our CMS through pym.js. **It should be use for datasets with less than 2,000 rows.** The graphic could be slow in loading if it's a big dataset.

## Getting Started

* Upload your data on Google Sheets and when you're done, publish to web and retrieve the link to the published data. The link should end in pubhtml. 

![Img](https://s3.amazonaws.com/nj-data/njam-datatables/images/njamdatatables1.png)

* Open up the `tabletop-feed.js` file and replace the link in the initializeTabletopObject() function with your newly retrieved Google Sheets link.

![Img](https://s3.amazonaws.com/nj-data/njam-datatables/images/njamdatatables2.png)


* Change the properties of 'mDataProp' to match the exact names of the columns in Google Sheets. Then, change the properties of 'sTitle' to change the name of the column that will show up in the database.

![Img](https://s3.amazonaws.com/nj-data/njam-datatables/images/njamdatatables3.png)

* In the variable oTable, change the column that will be sorted by default. Input the number of the column that will have a default sort in the database. Columns start with zero (ex. the fifth column would be 4). Also, go by the column number placement of where it appears on the graphic and not the column number placement in the Google Sheet. Also, you change whether the column sort is descending or ascending by changing the second part to `'desc'` or `'asc'` respectively.

![Img](https://s3.amazonaws.com/nj-data/njam-datatables/images/njamdatatables4.png)

* Open up `index.html` and make sure to change the introductory paragraph. There are also source and credit links that need to be swapped out to match your database.

![Img](https://s3.amazonaws.com/nj-data/njam-datatables/images/njamdatatables5.png)

* Open up `style.css` and scroll down to change the titles for mobile view. The property of "content" should match the title of the columns. 

![Img](https://s3.amazonaws.com/nj-data/njam-datatables/images/njamdatatables6.png)

* In fact, you can change many of the colors and overall look of your database by changing them in `style.css` and `demo_table.css`.

* You can also play around and change the functionality of the database as well. And even, improve on it.

## Embed on the site

* After you've uploaded your files into the server, embed the database using [pym-loader.js](http://blog.apps.npr.org/pym.js/) into the CMS. Make sure to change the `data-pym-src` link to the link for your project. Then, paste the embed code into CMS.

```javascript
<p data-pym-src="https://TK-database-link.html">Loading...</p>
<script src="https://pym.nprapps.org/pym-loader.v1.min.js" type="text/javascript"></script>

```

## Notes

* Don't worry about comma thousands separator in Google Sheets. If you change the number format in Google Sheets to include comma separators, it should automatically add it and sort it correctly. Same with currency and percentages.


## Questions

If you have any questions or comments, contact me at [castudillo@njadvancemedia.com](castudillo@njadvancemedia.com).

## Acknowledgements

* Jonathan Soma's [Tabletop.js](https://github.com/jsoma/tabletop) for connecting Google Sheets with the front-end database.
* NPR's [pym.js library](http://blog.apps.npr.org/pym.js/) for embedding a mobile iframe in the CMS.
