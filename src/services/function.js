class func {
  static generatePatchName() {
    var currentdate = new Date();
    return (
      currentdate.getDate() +
      "-" +
      (currentdate.getMonth() + 1) +
      "-" +
      currentdate.getFullYear() +
      "_" +
      currentdate.getHours() +
      "-" +
      currentdate.getMinutes() +
      "-" +
      currentdate.getSeconds()
    );
  }

  static getDate() {
    var currentdate = new Date();
    return (
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds()
    );
  }
}
export default func;
