import TeamProgress from "./TeamProgress.js";

export default {
    components: {
        'team-progress': TeamProgress
    },

    data() {
        return {
            'game': {
                'inTurn': 0,
                'teams': [
                    { score: 0 },
                    { score: 0 },
                ]
            }
        }
    },

    computed: {
        maxScore() {
            const max = Math.max(this.game.teams[0].score, this.game.teams[1].score)
            const diff = Math.abs(this.game.teams[0].score - this.game.teams[1].score)

            if (max >= 10 && diff < 2) {
                return max + (2 - diff)
            }

            return Math.max(11, max)
        }
    },

    methods: {
        resetGame() {
            this.game.inTurn = 0
            this.game.teams[0].score = 0
            this.game.teams[1].score = 0
        },

        grantScore(team) {
            const game = this.game
            const t0 = game.teams[0]
            const t1 = game.teams[1]

            const max = Math.max(t0.score, t1.score)
            const diff = Math.abs(t0.score - t1.score)

            // check if another team has won
            if (max >= 11 && diff >= 2) {
                console.log('the game is over')
                return
            }

            // change turn
            if (Math.max(t0.score, t1.score) >= 10
                && Math.abs(t0.score - t1.score) <= 1)
            {
                this.game.inTurn = (this.game.inTurn + 1) % 2
            } else if ((t0.score + t1.score) % 2 === 1) {
                this.game.inTurn = (this.game.inTurn + 1) % 2
            }

            // grant score
            game.teams[team].score += 1
        }
    },

    mounted() {
        window.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.grantScore(0)
                    break;
                case 'ArrowRight':
                    this.grantScore(1)
                    break;
                case 'R':
                    this.resetGame()
                    break;
            }
        });

        console.log('Key listener ready')
    }
}
