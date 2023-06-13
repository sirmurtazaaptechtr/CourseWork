<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">        
        <html lang="en">
            <head>
                <title>Music World - Catalog</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <!-- Bootstrap CSS -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />                
                <!-- Datatable CSS -->
                <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css" />
                <!-- Main CSS -->
                <style>
                    table tbody {
                       counter-reset: c; 
                    }
                    table tbody tr td:first-child::before {
                        counter-increment: c;
                        content: counter(c);
                    }
                </style>
                <!-- JQuery CDN -->
                <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>                 -->
            </head>
            <body>
                <div class="container mt-3">
                    <h2>Music Catalog</h2>
                    <p>This is a Music Collection.</p>            
                    <table class="table table-dark" id="myTable">
                        <thead>
                            <tr>
                                <th>Sr.no.</th>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Country</th>
                                <th>Company</th>
                                <th>Price</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="CATALOG/CD">
                                <tr>
                                    <td>. </td>
                                    <td><xsl:value-of select="TITLE" /></td>
                                    <td><xsl:value-of select="ARTIST" /></td>
                                    <td><xsl:value-of select="COUNTRY" /></td>
                                    <td><xsl:value-of select="COMPANY" /></td>
                                    <td><xsl:value-of select="PRICE" /></td>
                                    <td><xsl:value-of select="YEAR" /></td>
                                </tr>
                            </xsl:for-each>                        
                        </tbody>
                    </table>
                </div>                
                <!-- Bootstrap Bundle -->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                <!-- Datatable JS -->
                <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.js"></script>
                <!-- Main JS -->
                <script>
                    let table = new DataTable
                    ('#myTable');
                    table.DataTable();

                    // $(document).ready( function () {
                    //     $('#myTable').DataTable();
                    // } );
                </script>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>