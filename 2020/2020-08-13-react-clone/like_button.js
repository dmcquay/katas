'use strict';

const e = React.createElement;

function LikeButton() {
    const [liked, setLiked] = React.useState(false)

    if (liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => setLiked( true ) },
      'Like'
    );
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);