Garnish.$doc.ready(function(){$("#reply-to-feedback").on("click",function(e){var t=$(this).data("element-id");new ReplyModal(null,"new",t)}),$("#reply-email-btn").length>0&&new QarrEmailCorrespondence("#reply-email-btn"),$(".preview-email").on("click",function(e){e.preventDefault(),new QarrEmailCorrespondencePreview(e.target)}),$("#answers").length>0&&new Answers.Container("#answers");var e=$(".element-status"),t=e.find(".status-tag");$(".update-status-btn").on("click",function(r){r.preventDefault();var s={id:$(this).data("element-id"),status:$(this).data("status"),type:$(this).data("type")};Craft.postActionRequest("qarr/elements/update-status",s,$.proxy(function(r,s){r&&r.success&&(Craft.cp.displayNotice(Craft.t("qarr","Status updated")),"approved"===r.entry.status&&(t.removeClass("pending"),t.removeClass("rejected")),"rejected"===r.entry.status&&(t.removeClass("pending"),t.removeClass("approved")),t.addClass(r.entry.status),e.find(".status-text").html(r.entry.status))},this))}),$(".delete-entry").on("click",function(e){e.preventDefault();var t={id:$(this).data("element-id"),type:$(this).data("type")},r=Craft.t("qarr","Deleting this review will also remove all its responses and correspondence?");"questions"===t.type&&(r=Craft.t("qarr","Deleting this question will also remove all its answers and correspondence?")),new QarrPrompt(r,null).on("response",function(e){var r=this;e&&"ok"===e.response&&Craft.postActionRequest("qarr/elements/delete",t,$.proxy(function(e,s){e.success&&setTimeout($.proxy(function(){Craft.cp.displayNotice(Craft.t("qarr","Entry deleted, redirecting...")),setTimeout($.proxy(function(){Craft.redirectTo(Craft.getCpUrl()+"/qarr/"+t.type)},this),1e3)},r),1e3)},this))})})});
