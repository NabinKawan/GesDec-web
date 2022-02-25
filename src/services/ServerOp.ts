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
}
