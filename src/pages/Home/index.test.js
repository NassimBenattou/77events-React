import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    
    render(<Home />);
    const eventList = await screen.findByTestId("card-testid");
    expect(eventList).toBeInTheDocument();
    expect(eventList.children.length).toBeGreaterThan(0);
  })
  it("a list a people is displayed", async () => {

    render(<Home />);
    const peopleList = await screen.findByTestId("people-list");
    expect(peopleList).toBeInTheDocument();
    expect(peopleList.children.length).toBeGreaterThan(0);
  })
  it("a footer is displayed", async () => {

    render(<Home />);
    const footer = await screen.findByTestId("footer");
    expect(footer).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", () => {
    // to implement
  })
});
