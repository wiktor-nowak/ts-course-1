import { useRef, type FormEvent } from "react";
// "type" keyword does not allow this import to be passed to JS bundle, the bundler knows that it is only needed during development.

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null); // we need to add "null" cause by default useRef has "undefined" value
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // if instead of defining standalone function I'd use inline submit function TS would inferm that it is of FormEvent type, but in this case I need to implicitly specify it.
    event?.preventDefault();
    // new FormData(event.currentTarget); // INTERESTING FEATURE !!!
    const enteredGoal = goal.current!.value;
    const enteredSummary = goal.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" name="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" name="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
