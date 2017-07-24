import { AngularTodoPracticePage } from './app.po';

describe('angular-todo-practice App', () => {
  let page: AngularTodoPracticePage;

  beforeEach(() => {
    page = new AngularTodoPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
