describe ('MountainFormContainer', () =>{
  let wrapper;

  beforeEach(() => {
    spyOn(UserEmotionContainer.prototype, 'handleChange').and.callThrough();
    wrapper = mount(<UserEmotionContainer/>)
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      happiness: 0,
      sadness: 0,
      excitement: 0,
      anger: 0,
      anxiety: 0,
      peacefulness: 0,
      payLoad: [],
      currentUser: []})
  })

  it('should render 6 Slider Components', () => {
    expect(wrapper.find('').length).toEqual(6);
  })

});
