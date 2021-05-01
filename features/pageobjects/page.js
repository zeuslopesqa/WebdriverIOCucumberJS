module.exports = class Page{
    /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
   open (){
      return browser.url(`http://uitest.duodecadits.com/`);
   }

   get searchTitleOfThePage(){        
      var title = driver.executeScript("return document.title;");
      return title;
  }

  checkTitleOfThePage(){
      return this.searchTitleOfThePage;
  }

  get logoCompany(){
      return $('#dh_logo');
  }

  checkLogoPage(){
     return this.logoCompany;
  }
}