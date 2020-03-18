import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { sortStories } from './util/story-helpers';

// Add group and story names to the sort order to explicitly order them.
// Items that are not included in the list are shown below the sorted items.
const SORT_ORDER = {
  Introduction: [
    'Introduction'
  ],
  Components: [],
};

const Story = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .sbdocs & {
    min-height: auto;
  }
`;

addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
    showRoots: true
  },
  docs: { components }
});

addDecorator(withA11y);
addDecorator(story => (
  <>
    {story()}
  </>
));
