export default class ServerOp {
  static async postFeedback(feedback: string) {
    try {
      console.log('hello');
      const response = await fetch('https://gesdec-api.herokuapp.com/feedback', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({
          feedback: feedback,
        }),
      });
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  static async downloadModel() {
    try {
      console.log('hello');
      const response = await fetch('https://gesdec-api.herokuapp.com/model', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      });
      const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(response),
      )}`;
      const link = document.createElement('a');
      link.href = jsonString;
      link.download = 'model.json';
      link.click();
    } catch (e) {
      console.log(e);
      // return null;
    }
  }
}
