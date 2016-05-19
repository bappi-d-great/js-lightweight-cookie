function LIB_Cookie()
{
    this.cname = '';
    this.cvalue = '';
    this.expire = '';
    this.domain = '';
    this.path = '';
    
    this.setVars = function( cname, cvalue, expire, domain, path )
    {
        this.cname = cname;
        this.cvalue = cvalue;
        this.expire = expire;
        this.domain = domain;
        this.path = path;
    }
    
    this.setCookie = function()
    {
        var d = new Date();
        d.setTime( d.getTime() + ( this.expire * 24 * 60 * 60 * 1000 ) );
        var expires = 'expires=' + d.toUTCString();
        document.cookie = this.cname + "=" + this.cvalue + "; " + expires + ';domain=' + this.domain + ';path=' + this.path;
    }
    
    this.getCookie = function()
    {
        var name = this.cname + "=";
        var ca = document.cookie.split( ';' );
        for( var i = 0; i < ca.length; i++ )
        {
            var c = ca[i];
            while ( c.charAt( 0 ) == ' ' )
            {
                c = c.substring( 1 );
            }
            if ( c.indexOf( name ) == 0 )
            {
                return c.substring( name.length, c.length );
            }
        }
        return '';
    }
    
    this.hasCookie = function()
    {
        var user = this.getCookie( this.cname );
        if ( user != '' )
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
