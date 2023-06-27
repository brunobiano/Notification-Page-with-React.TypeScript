import { useState } from 'react';

import * as S from './App.styles';

import { Post } from './types/Post';
import { HeaderNotification } from './components/HeaderNotification';

import img1 from '../mentor/assets/images/avatar-mark-webber.webp';
import img2 from '../mentor/assets/images/avatar-angela-gray.webp';
import img3 from '../mentor/assets/images/avatar-jacob-thompson.webp';
import img4 from '../mentor/assets/images/avatar-rizky-hasanuddin.webp';
import img5 from '../mentor/assets/images/avatar-kimberly-smith.webp';
import img6 from '../mentor/assets/images/avatar-nathan-peterson.webp';
import img7 from '../mentor/assets/images/avatar-anna-kim.webp';
import imgChess from '../mentor/assets/images/image-chess.webp'

const App = () => {
  const [finalPost, setFinalPost] = useState<Post[]>([
    { id: 1, user: 'Mark Webber', picture: img1, action: 'reacted to your recent post', actionGoal: 'My first tournament today!', sentWhen: '1m ago', msgRead: false },
    { id: 2, user: 'Angela Gray', picture: img2, action: 'followed you', sentWhen: '5m ago', msgRead: false },
    { id: 3, user: 'Jacob Thompson', picture: img3, action: 'has joined your group', actionGoal: 'Chess Club', sentWhen: '1 day ago', msgRead: false },
    { id: 4, user: 'Rizky Hasanuddin', picture: img4, action: 'sent you a private message', privateMsg: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game`, sentWhen: '5 days ago', msgRead: false },
    { id: 5, user: 'Kimberly Smith', picture: img5, action: 'commented on your picture', sentWhen: '1 week ago', picPreview: true, msgRead: false },
    { id: 6, user: 'Nathan Peterson', picture: img6, action: 'reacted to your recent post', actionGoal: '5 end-game strategies to increase your win rate', sentWhen: '2 weeks ago', msgRead: false },
    { id: 7, user: 'Anna Kim', picture: img7, action: 'left the group', actionGoal: 'Chess Club', sentWhen: '2 weeks ago', msgRead: false }
  ]);

  const handleReadMsgs = (itemId: number) => {
    const updatedReadMsgs = finalPost.map((item) => {
      if (item.id === itemId) {
        return { ...item, msgRead: true };
      }
      return item;
    });
    setFinalPost(updatedReadMsgs);
  };

  const buttonReadAll = () => {
    const updatedUsers = finalPost.map(item => ({ ...item, msgRead: true }));
    setFinalPost(updatedUsers);
  };

  const unreadMsgsCount = finalPost.filter((item) => !item.msgRead).length;

  return (
    <S.Container>
      <S.Header>
        <HeaderNotification unreadMsgsCount={unreadMsgsCount} buttonReadAll={buttonReadAll}/>
      </S.Header>
      <S.Body>
        <S.PostContainer> {/*Looking for a way to put all this in a separated component. */}
          {finalPost.map((item, index) => (
            <S.Post key={index} read={item.msgRead} onMouseOver={() => handleReadMsgs(item.id)}>
              <S.Avatar>
                <img src={item.picture} alt="" />
              </S.Avatar>
              <S.PostText>
                <b>{item.user}</b>
                <span>{item.action}</span>
                {item.actionGoal && <span className={item.actionGoal === 'Chess Club' ? 'chess' : 'others'}>{item.actionGoal}</span>}
                {item.msgRead === false && <span className='redDot'>🔴</span>}
                <p className='sentWhen'>{item.sentWhen}</p>
                {item.privateMsg && <S.PrivateMsg><p>{item.privateMsg}</p></S.PrivateMsg>}
              </S.PostText>
              {item.picPreview && <S.ExtraPicture><img src={imgChess} className='imgChess' /></S.ExtraPicture>}

            </S.Post>
          ))}
        </S.PostContainer>
      </S.Body>
    </S.Container>
  );
}

export default App