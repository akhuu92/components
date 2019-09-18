import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => { 
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author="Mike 'MysteryMeat' Pang" 
            timeAgo="Today at 4:20PM" 
            commentText="Hehe."
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <CommentDetail 
          author="Johnson 'Jdeasaur' Dea" 
          timeAgo="Yesterday at 4:20PM" 
          commentText="Me and Michael."
          avatar={faker.image.avatar()}
        />
        <CommentDetail 
          author="Calvin 'Smeggycliff' Ouk" 
          timeAgo="Tomorrow at 4:20PM" 
          commentText="Dat Deuh!"
          avatar={faker.image.avatar()}
        />
      </div>  
    );
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)