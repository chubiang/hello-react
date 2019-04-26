import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕! 내 이름 {name}이야.
    </div>
  );
};
MyName.defaultProps = {
  name: '기본이름'
};
export default MyName;
