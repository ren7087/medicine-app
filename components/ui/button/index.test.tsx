import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ClickButton } from ".";

describe("Buttonコンポーネントのテスト", () => {
  it("正しくレンダリングされる", () => {
    const handleClick = jest.fn();

    render(
      <ClickButton type="primary" onClick={handleClick}>
        Test
      </ClickButton>,
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("children propsからのテキストが正しく表示される", () => {
    const handleClick = jest.fn();
    render(
      <ClickButton type="primary" onClick={handleClick}>
        Click me
      </ClickButton>,
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  //   it("クリック時にonClickイベントハンドラがトリガーされる", () => {
  //     const handleClick = jest.fn();

  //     render(<Button onClick={handleClick}>Click me</Button>);

  //     const buttonElement = screen.getByText("Click me");
  //     fireEvent.click(buttonElement);

  //     expect(handleClick).toHaveBeenCalled();
  //   });
});
