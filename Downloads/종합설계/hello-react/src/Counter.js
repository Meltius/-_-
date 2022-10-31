<button
  // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
  onClick={() => {
    this.setState(
      {
        number: number + 1
      },
      () => {
        console.log(‘방금 setState가 호출되었습니다.’);
        console.log(this.state);
      }
    );
  }}
>
  +1
</button>