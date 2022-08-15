import random


class Player:

    name, moves = ''

    def setName(self, name):
        self.name = name

    def getName(self):
        return self.name

    def setMoves(self, moves):
        self.moves = moves

    def getMove(self):
        return self.moves


def playWithCom():
    player = Player()
    player.setName(input("Enter your name:\n"))
    print(f"Hey {player.getName()} lets start the game")
    x = input("Enter:\nR for Rock\nP for Paper\nS for Scissors\n").lower()
    player.setMoves(x)
    del x

    opponent = Player()
    opponent.setName("Lucifer")
    opponent.setMoves(random.choice(['r', 'p', 's']))

    winner = whoWin(player.getMove(), opponent.getMove())
    if winner == 0:
        print("It's a draw")
        print(f"{player.getMove()} = {opponent.getMove()}")

    if winner > 0:
        print("You win")
        print(f"{player.getMove()} > {opponent.getMove()}")

    if winner < 0:
        print("You lose")
        print(f"{player.getMove()} < {opponent.getMove()}")


def whoWin(player, opponent):

    # r = r , s = s , p = p
    if player == opponent:
        return 0  # draw

    # r < p , p < s , s < r
    elif (player == 'r' and opponent == 'p') or (player == 'p' and opponent == 's') or (player == 's' and opponent == 'r'):
        return 1  # player wins

    elif (opponent == 'r' and player == 'p') or (opponent == 'p' and player == 's') or (opponent == 's' and player == 'r'):
        return (-1)  # opponent wins


playWithCom()
