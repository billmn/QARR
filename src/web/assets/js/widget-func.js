var QARR={Widgets:{}};QARR.Widgets.PendingItemsWidget=Garnish.Base.extend({$container:null,$items:null,$loader:null,payload:null,exclude:null,init:function(t){var e=this;this.exclude=[],this.$container=$(t),this.$loader=this.$container.find(".loader"),this.$items=this.$container.find(".widget-recent-element-item"),this.$items.length>0&&$.each(this.$items,function(t,i){new QARR.Widgets.PendingItem(i,e)}),this.checkElements()},checkElements:function(){this.$items=this.$container.find(".widget-recent-element-item"),0===this.$items.length&&this.$container.find(".element-list").html('<p class="text-gray-500">'+Craft.t("qarr","No pending submissions")+"</p>")},excludeElement:function(t){this.exclude.push(t)},fetchNewItem:function(t,e){var i=this,n={type:t.type,limit:1,exclude:this.exclude};Craft.postActionRequest("qarr/elements/fetch-pending-items",n,$.proxy(function(t,n){if(i.$loader.addClass("hidden"),t.success){e.remove();var s=$(t.template);i.$container.find(".element-list").append(s),s.addClass("element-item-new"),i.addPendingItem(i.$container.find(s))}},this))},addPendingItem:function(t){new QARR.Widgets.PendingItem(t,this),this.checkElements()}}),QARR.Widgets.PendingItem=Garnish.Base.extend({$item:null,$actionBtn:null,parent:null,payload:null,hud:null,init:function(t,e){this.parent=e,this.$item=$(t),this.$actionBtn=this.$item.find(".action-btn"),this.payload={id:this.$item.data("element-id"),type:this.$item.data("type")},this.parent.excludeElement(this.payload.id),this.addTip(),this.addListener(this.$actionBtn,"click","performAction")},addTip:function(){var t=this.$item.find(".tippy-with-html");tippy(t[0],{onShow:function(t){var e=t.reference.dataset.tippyId,i=document.getElementById("element-popup-"+e).cloneNode(!0);$(i).show(),t.setContent(i)},placement:"top",interactive:!0,theme:"light",duration:400,arrow:!0})},performAction:function(t){var e=this,i=this,n=t.target.dataset.actionType;if("delete"===n){var s=$(),a=$("<div/>"),d=$('<div class="hud-footer"/>').appendTo(a),l=($("\n                <div>".concat(Craft.t("qarr","Are you sure?"),"</div>\n            ")).appendTo(a),$('<div class="buttons right"/>').appendTo(d)),r=$('<div class="btn">'+Craft.t("qarr","Cancel")+"</div>").appendTo(l);$('<input class="btn submit" type="submit" value="'+Craft.t("qarr","Ok")+'"/>').appendTo(l),$('<div class="spinner hidden"/>').appendTo(l);s=s.add(a),this.hud=new Garnish.HUD(t.target,s,{hudClass:"hud",bodyClass:"body",closeOtherHUDs:!1}),this.addListener(r,"click",function(){this.hud.hide()}),this.hud.on("submit",function(t){i.deleteElement(),i.hud.hide()})}"status"===n&&(this.parent.$loader.removeClass("hidden"),this.payload.status=t.target.dataset.status,Craft.postActionRequest("qarr/elements/update-status",this.payload,$.proxy(function(t,n){t.success&&(Craft.cp.displayNotice(Craft.t("qarr","Item "+e.payload.status)),i.$item.addClass("status-changed"),e.$item.velocity("slideUp",{duration:300}),e.parent.fetchNewItem(i.payload,e.$item))},this)))},deleteElement:function(){var t=this;this.parent.$loader.removeClass("hidden");var e={id:this.payload.id};Craft.postActionRequest("qarr/elements/delete",e,$.proxy(function(e,i){t.parent.$loader.addClass("hidden"),e.success&&(Craft.cp.displayNotice(Craft.t("qarr","Item deleted")),t.$item.addClass("item-deleted"),t.$item.velocity("slideUp",{duration:300}),t.parent.fetchNewItem(t.payload,t.$item))},this))}});
