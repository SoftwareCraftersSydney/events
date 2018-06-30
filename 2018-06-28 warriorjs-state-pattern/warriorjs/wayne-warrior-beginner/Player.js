const rest = {
  perform: (context, warrior) => {
    const isHurting = context.prevHealth > warrior.health();
    if (warrior.health() >= 20 || isHurting) {
      context.state = walk;
      context.state.perform(context, warrior);
    } else {
      warrior.rest();
    }
  }
};

const walkBackwards = {
  perform: (context, warrior) => {
    const isAtCaptive = !warrior.feel("backward").isEmpty();
    if (isAtCaptive) {
      context.state = rescueBackwards;
      context.state.perform(context, warrior);
    } else {
      warrior.walk("backward");
    }
  }
};

const rescueBackwards = {
  perform: (context, warrior) => {
    warrior.rescue("backward");
    context.state = rest;
  }
};

const attack = {
  perform: (context, warrior) => {
    if (warrior.feel().isEmpty() && warrior.health() < 10) {
      context.state = rest;
      context.state.perform(context, warrior);
    } else {
      warrior.attack();
      warrior.think(context.killCount);
      if (warrior.feel().isEmpty()) {
        context.killCount++;
      }
      if (context.killCount === 1) {
        context.state = walkBackwards;
        context.state.perform(context, warrior);
        return;
      }
    }
  }
};

const rescue = {
  perform: (context, warrior) => {
    warrior.rescue();
    context.state = walk;
  }
};

const walk = {
  perform: (context, warrior) => {
    const enemyInFront =
      warrior.feel().getUnit() &&
      warrior
        .feel()
        .getUnit()
        .isEnemy();

    if (!warrior.feel().isEmpty() && enemyInFront) {
      context.state = attack;
      context.state.perform(context, warrior);
    } else if (!warrior.feel().isEmpty() && !enemyInFront) {
      context.state = rescue;
      context.state.perform(context, warrior);
    } else {
      warrior.walk();
    }
  }
};

class Player {
  constructor() {
    this.state = walk;
    this.killCount = 0;
    this.prevHealth = 20;
  }

  playTurn(warrior) {
    this.state.perform(this, warrior);
    this.prevHealth = warrior.health();
  }
}
