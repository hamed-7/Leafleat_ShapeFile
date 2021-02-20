// TODO:
// could check for window to make sure it is always visible,
// so it could change the position depending on placement in window
// but default to whatever was provided

class DropContent {
    
    constructor(el, direction) {
        this.options = {
            autoClose: false,
            accessible: true
        }
        
        this.id = el.getAttribute('data-drop' + direction);
        this.trigger = el;
        this.content = document.getElementById(this.id);
        this.direction = direction;
        
        this.triggerTop =
        this.triggerLeft =
        this.triggerWidth =
    	this.triggerHeight =
        this.contentWidth =
        this.contentHeight = null;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.calcValues();
        
        if(this.options.accessible) {
    		this.setAccessibleAttributes();
        }
    }
    
    bindEvents() {
        window.addEventListener('resize', this.debounce(() => this.calcValues(), 250));
        document.addEventListener('click', e => this.docClickHandler(e));
        this.trigger.addEventListener('click', () => this.toggle());
    }
    
    setAccessibleAttributes() {
        
        // TODO: refactor, should just loop through and set all atts we need
        // https://terrillthompson.com/blog/474
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role
        // http://staff.washington.edu/tft/tests/menus/simplyaccessible/index.html
        // http://staff.washington.edu/tft/tests/menus/simplyaccessible/menu.js
        
        // this needs to be set only if it isn't a button
        //this.trigger.setAttribute('role', 'button');
        this.trigger.setAttribute('role', 'menuitem');
        this.trigger.setAttribute('tabindex', 0);
        
        this.trigger.setAttribute('aria-haspopup', true);
        this.trigger.setAttribute('aria-controls', this.id);
        this.trigger.setAttribute('aria-expanded', false);
        
        //this.content.setAttribute('role', 'group');
        this.content.setAttribute('role', 'menu');
        this.content.setAttribute('aria-hidden', true);
    }
    
    calcValues() {
        // grab positions & dimensions
        this.triggerTop = this.trigger.offsetTop;
        this.triggerLeft = this.trigger.offsetLeft;
        this.triggerWidth = this.trigger.offsetWidth;
        this.triggerHeight = this.trigger.offsetHeight;
        this.contentWidth = this.content.offsetWidth;
        this.contentHeight = this.content.offsetHeight;
        
        // position content
        this.positionContent();
    }
    
    positionContent() {
        // will need to refactor this to be able to get dimensions when display none
        //this.content.style.display = 'none';
        
        switch(this.direction) {
            case 'left':
                this.content.style.top = this.triggerTop + 'px';
		        this.content.style.left = this.triggerLeft - this.contentWidth + 'px';
                break;
            case 'right':
                this.content.style.top = this.triggerTop + 'px';
		        this.content.style.left = this.triggerLeft + this.triggerWidth + 'px';
                break;
        	case 'up':
                this.content.style.top = this.triggerTop - this.contentHeight + 'px';
                this.content.style.left = this.triggerLeft + 'px';
                break;
            default:
         		/*this.content.style.top = this.triggerTop + this.triggerHeight + 'px';
		        this.content.style.left = this.triggerLeft + 'px';   */
                // donw-right
                this.content.style.top = this.triggerTop + this.triggerHeight + 'px';
		        this.content.style.left = this.triggerLeft + this.triggerWidth - this.contentWidth + 'px';   
        }
    }
    
    open() {
        this.trigger.setAttribute('aria-expanded', true);
        this.content.setAttribute('aria-hidden', false);
        
        this.content.classList.add('dropdown_content--active');   
    }
    
    close() {
        this.trigger.setAttribute('aria-expanded', false);
        this.content.setAttribute('aria-hidden', true);
        
        this.content.classList.remove('dropdown_content--active');   
    }
    
    toggle() {
        if(this.content.classList.contains('dropdown_content--active')) {
            this.close();
        } else {
            this.open();
        }
    }
    
    docClickHandler(e) {
        // make sure we aren't clicking the trigger or the content tied to it
        if(e.target !== this.trigger && this.findParent(e.target, 'dropdown_content') === null) {
        	this.close();
        }
    }
    
    // helpers
    findParent(el, cls) {
        while((el = el.parentElement) && !el.classList.contains(cls));
    	return el;
    }
    
    debounce(fn, delay) {
        var timer = null;
        return function () {
        	var context = this, args = arguments;
	        clearTimeout(timer);
    	    timer = setTimeout(function () {
	        	fn.apply(context, args);
	        }, delay);
        };
	}
}

var dropTypes = ['up', 'down', 'left', 'right'];

for(let i = dropTypes.length; i--;) {
    
    var direction = dropTypes[i],
        dataDrops = document.querySelectorAll('[data-drop'+ direction +']');
    
    // attach drops with their respective directions
    for(let j = dataDrops.length; j--;) {
		new DropContent(dataDrops[j], direction);
	}
}