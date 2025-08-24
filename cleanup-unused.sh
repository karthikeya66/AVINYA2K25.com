#!/bin/bash

# List of used UI components (from our analysis)
USED_COMPONENTS=(
  "button"
  "input"
  "separator"
  "sheet"
  "skeleton"
  "tooltip"
  "dialog"
  "label"
  "toast"
  "toaster"
  "sonner"
  "toggle"
  "toggle-group"
)

# Function to check if a component is used
is_used() {
  local component=$1
  for used in "${USED_COMPONENTS[@]}"; do
    if [[ "$component" == "$used" ]]; then
      return 0
    fi
  done
  return 1
}

# Go to components directory
cd "$(dirname "$0")/src/components/ui" || exit 1

# Remove unused components
for file in *.tsx; do
  # Get component name without extension
  component_name=$(basename "$file" .tsx)
  
  # Skip index files or other special files
  if [[ "$component_name" == "index" ]]; then
    continue
  fi
  
  # Check if component is used
  if ! is_used "$component_name"; then
    echo "Removing unused component: $file"
    rm -f "$file"
  fi
done

echo "Cleanup complete!"
