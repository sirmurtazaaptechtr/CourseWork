<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title></title>
                <!-- Latest compiled and minified CSS -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <!-- Main Style -->
                <style>
                    table tbody {
                        counter-reset: ctr;                        
                    }
                    table tbody tr td:first-child::before {
                        counter-increment: ctr;
                        content: counter(ctr);
                    }
                </style>
            </head>
            <body>
                <h1 class="display-1">Breakfast Menu</h1>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th>SR.NO.</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>DESCRIPTION</th>
                            <th>CALORIES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="breakfast_menu/food">
                            <tr>
                                <td>. </td>
                                <td><xsl:value-of select="name" /></td>
                                <td><xsl:value-of select="price" /></td>
                                <td><xsl:value-of select="description" /></td>
                                <td><xsl:value-of select="calories" /></td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
                <!-- Latest compiled JavaScript -->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>