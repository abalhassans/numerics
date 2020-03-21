
// via options.precision you can set the precision of decimal operations
// see here for more http://mathjs.org/docs/reference/functions/format.html
this.options={ notation: 'auto',  precision : 99,  lowerExp: -99,  upperExp: 99 };

this.decode_trim = function(x)
{
return "Iref: " + ((x >> 11) & 31) + "\tSlope: " + ((x >> 6) & 31) + "\tVal: " + (x & 63);
};



this.limits = function(limit, tol)
{
    return "Lower Limit:" + limit*(1-(tol/100))+"\tUpper Limit:" + limit*(1+(tol/100)); 
};




