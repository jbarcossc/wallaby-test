describe('tictactoe', function () {
	beforeEach(function () {
		this.board = Array(9).fill(null);
	});

	it('should win x', function () {
		this.board[0] = 'x';
		this.board[1] = 'o';
		this.board[3] = 'x';
		this.board[2] = 'o';
		this.board[6] = 'x';
		console.log(this.board);

		expect(checkTicTacToeWinner(this.board)).toBe('x');
	});
});
