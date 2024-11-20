function climbingLeaderboard(scores, alice) {
    let arr = [...new Set(scores)];
    let i = arr.length;

    return alice.map((score) => {

        for (; i > 0; i--) {
            if (score < arr[i-1]) {
                break;
            }
        }

        return i+1;
    });
}
console.log(climbingLeaderboard([100,100,50,40,40,20,10],[5,25,50,120]));//result should be  [6,4,2,1]


