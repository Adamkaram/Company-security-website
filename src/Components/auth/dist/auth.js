body;
{
    background: #f6f5f7;
    display: flex;
    justify - content;
    center;
    align - items;
    center;
    flex - direction;
    column;
    font - family;
    'Montserrat', sans - serif;
    height: 100;
    vh;
    margin: -20;
    px;
    0;
    50;
    px;
}
h1;
{
    font - weight;
    bold;
    margin: 0;
}
h2;
{
    text - align;
    center;
}
p;
{
    font - size;
    14;
    px;
    font - weight;
    100;
    line - height;
    20;
    px;
    letter - spacing;
    0.5;
    px;
    margin: 20;
    px;
    0;
    30;
    px;
}
span;
{
    font - size;
    12;
    px;
}
a;
{
    color: #;
    333;
    font - size;
    14;
    px;
    text - decoration;
    none;
    margin: 15;
    px;
    0;
}
button;
{
    border - radius;
    20;
    px;
    border: 1;
    px;
    solid;
    #FF4B2B;
    background - color;
    #FF4B2B;
    color: #FFFFFF;
    font - size;
    12;
    px;
    font - weight;
    bold;
    padding: 12;
    px;
    45;
    px;
    letter - spacing;
    1;
    px;
    text - transform;
    uppercase;
    transition: transform;
    80;
    ms;
    ease -  in ;
}
button: active;
{
    transform: scale(0.95);
}
button: focus;
{
    outline: none;
}
button.ghost;
{
    background - color;
    transparent;
    border - color;
    #FFFFFF;
}
form;
{
    background - color;
    #FFFFFF;
    display: flex;
    align - items;
    center;
    justify - content;
    center;
    flex - direction;
    column;
    padding: 0;
    50;
    px;
    height: 100 % ;
    text - align;
    center;
}
input;
{
    background - color;
    #eee;
    border: none;
    padding: 12;
    px;
    15;
    px;
    margin: 8;
    px;
    0;
    width: 100 % ;
}
container;
{
    background - color;
    #fff;
    border - radius;
    10;
    px;
    box - shadow;
    0;
    14;
    px;
    28;
    px;
    rgba(0, 0, 0, 0.25),
        0;
    10;
    px;
    10;
    px;
    rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768;
    px;
    max - width;
    100 % ;
    min - height;
    480;
    px;
}
form - container;
{
    position: absolute;
    top: 0;
    height: 100 % ;
    transition: all;
    0.6;
    s;
    ease -  in -out;
}
sign -  in -container;
{
    left: 0;
    width: 50 % ;
    z - index;
    2;
}
container.right - panel - active.sign -  in -container;
{
    transform: translateX(100 % );
}
sign - up - container;
{
    left: 0;
    width: 50 % ;
    opacity: 0;
    z - index;
    1;
}
container.right - panel - active.sign - up - container;
{
    transform: translateX(100 % );
    opacity: 1;
    z - index;
    5;
    animation: show;
    0.6;
    s;
}
show;
{
    0 % , 49.99 % {
        opacity: 0,
        z: z
    } - index;
    1;
}
50 % , 100 % {
    opacity: 1,
    z: z
} - index;
5;
overlay - container;
{
    position: absolute;
    top: 0;
    left: 50 % ;
    width: 50 % ;
    height: 100 % ;
    overflow: hidden;
    transition: transform;
    0.6;
    s;
    ease -  in -out;
    z - index;
    100;
}
container.right - panel - active.overlay - container;
{
    transform: translateX(-100 % );
}
overlay;
{
    background: #FF416C;
    background: -webkit - linear - gradient(to, right, #FF4B2B, #FF416C);
    background: linear - gradient(to, right, #FF4B2B, #FF416C);
    background - repeat;
    no - repeat;
    background - size;
    cover;
    background - position;
    0;
    0;
    color: #FFFFFF;
    position: relative;
    left: -100 % ;
    height: 100 % ;
    width: 200 % ;
    transform: translateX(0);
    transition: transform;
    0.6;
    s;
    ease -  in -out;
}
container.right - panel - active.overlay;
{
    transform: translateX(50 % );
}
overlay - panel;
{
    position: absolute;
    display: flex;
    align - items;
    center;
    justify - content;
    center;
    flex - direction;
    column;
    padding: 0;
    40;
    px;
    text - align;
    center;
    top: 0;
    height: 100 % ;
    width: 50 % ;
    transform: translateX(0);
    transition: transform;
    0.6;
    s;
    ease -  in -out;
}
overlay - left;
{
    transform: translateX(-20 % );
}
container.right - panel - active.overlay - left;
{
    transform: translateX(0);
}
overlay - right;
{
    right: 0;
    transform: translateX(0);
}
container.right - panel - active.overlay - right;
{
    transform: translateX(20 % );
}
social - container;
{
    margin: 20;
    px;
    0;
}
social - container;
a;
{
    border: 1;
    px;
    solid;
    #DDDDDD;
    border - radius;
    50 % ;
    display: inline - flex;
    justify - content;
    center;
    align - items;
    center;
    margin: 0;
    5;
    px;
    height: 40;
    px;
    width: 40;
    px;
}
footer;
{
    background - color;
    #;
    222;
    color: #fff;
    font - size;
    14;
    px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text - align;
    center;
    z - index;
    999;
}
footer;
p;
{
    margin: 10;
    px;
    0;
}
footer;
i;
{
    color: red;
}
footer;
a;
{
    color: #;
    3;
    c97bf;
    text - decoration;
    none;
}