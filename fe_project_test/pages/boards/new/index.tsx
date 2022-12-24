import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

export const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function BoardWritePage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer,
        title,
        contents,
      },
    });
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자: <input onChange={onChangeWriter} />
      제목: <input onChange={onChangeTitle} />
      내용: <input onChange={onChangeContents} />
      <button onClick={onClickSubmit}>작성하기</button>
    </>
  );
}
