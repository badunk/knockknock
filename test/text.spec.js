describe('#text', function(){
  var viewModel;
  var template;  
  var ko
  beforeEach(function(done){
    fixtures.load('knockout.html', 'template.html', function(){
      viewModel = fixtures.window().viewModel;
      ko = fixtures.window().ko;
      template = fixtures.window().document.getElementById('template');
      template.setAttribute('data-text', 'someText');
      done();
    });
  })
  afterEach(function(){
    fixtures.cleanUp();
  })
  it('puts the observable text in the element', function(){
    viewModel.someText = ko.observable('woot!');
    ko.applyBindings(viewModel);
    $(template).should.have.text('woot!');
  })
})
