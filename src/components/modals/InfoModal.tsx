import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the Federal Agency Abbreviation in 6 tries. After each guess, the
        color of the tiles will change to show how close your guess was to the
        word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is in the Federal Agency Abbreviation and in the correct
        spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="S" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is in the Federal Agency Abbreviation but in the wrong
        spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="B" />
        <Cell isRevealing={true} isCompleted={true} value="O" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter O is not in the Federal Agency Abbreviation in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/danielors/fedle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>

      <p className="mt-6 text-xs text-gray-500 dark:text-gray-300">
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Make your own with @cwackerfuss' React Wordle!
        </a>{' '}
      </p>
    </BaseModal>
  )
}
