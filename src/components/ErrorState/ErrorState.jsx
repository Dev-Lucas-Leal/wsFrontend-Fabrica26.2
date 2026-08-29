/**
 * @param {{ message: string }} props
*/

export function ErrorState({ message }) {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-red-500/10 p-6 text-center text-red-400">

      <p>{message}</p>
      
    </div>
  );
}