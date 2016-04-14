;(function () {
    function drag() {
        this.dome = null;
        this.distX = null;
        this.distY = null;
        this.options = {
            id: "",
            todown: function () {

            },
            toup: function () {

            }
        }
    }

    drag.prototype.init = function (opt) {
        var This = this;
        extend(this.options, opt);
        this.dome = document.getElementById(this.options.id);
        this.dome.onmousedown = function (ev) {
            var ev = ev || window.event;
            This.fndown(ev);
            This.fnmove(ev);
            document.onmousemove = function (ev) {
                This.fnmove(ev);
            }
        }
        this.dome.onmouseup=function () {
            document.onmousemove=null;
        }
    }
    drag.prototype.fndown = function (ev) {
        this.distX = ev.clientX - this.dome.offsetLeft;
        this.distY = ev.clientY - this.dome.offsetTop;
    }
    drag.prototype.fnmove = function (ev) {
        this.dome.style.left = ev.clientX - this.distX + "px";
        this.dome.style.top = ev.clientY - this.distY+ "px";
    }
    function extend(obj1, obj2) {
        for (var k in obj2) {
            obj1[k] = obj2[k];
        }
    }

    window.drag = drag;
})()
