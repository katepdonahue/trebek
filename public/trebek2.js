$(".card").not(".cat-card").on('click', function(){
  var $this = $(this);
  $this.addClass("chosen");
  $this.find(".value").hide();
  $this.find(".question").show();
  // $this.children.toggle(); 
  $(".card").not(".cat-card").not($this).addClass("disabled");
  // $this.off('click', 'chosen', function() {
  //   $(this).removeClass("chosen");
  // });
});

$(".chosen").on('click', function() {
  var $this = $(this);
  $this.find(".answer").show();
  $this.find(".question").hide();
});
