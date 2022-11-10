useEffect(() => {
    // useEffect에 파라미터로 넣는 함수는 async로 할 수 없기 때문에
    // 그 내부에서 async 함수를 선언하고 호출해 줍니다.
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e); // 에러 조회
      }
    };
    fn();
  }, [getPost, getUsers]);
