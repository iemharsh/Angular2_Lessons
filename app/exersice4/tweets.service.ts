export class TweetsService {
    tweets;
    constructor() {
        this.tweets = [
            {
                image_url : 'http://lorempixel.com/100/100/people?1',
                author: 'Harsh Wadhwa',
                username: 'iemharsh',
                totalVotes : 10,
                tweet : 'A Tweet by harsh'
            },
            {
                image_url : 'http://lorempixel.com/100/100/people?2',
                author: 'Amber Sethi',
                username: '052829amber',
                totalVotes : 20,
                tweet : 'A Tweet by amber'
            },
            {
                image_url : 'http://lorempixel.com/100/100/people?3',
                author: 'Deepanshu Tuteja',
                username: 'deepnashu1801',
                totalVotes : 13,
                tweet : 'A Tweet by deepanshu'
            }
        ];
    }
    getTweets() {
        return this.tweets;
    }
}