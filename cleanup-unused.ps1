# List of used UI components (from our analysis)
$usedComponents = @(
    "button",
    "input",
    "separator",
    "sheet",
    "skeleton",
    "tooltip",
    "dialog",
    "label",
    "toast",
    "toaster",
    "sonner",
    "toggle",
    "toggle-group"
)

# Go to components directory
$componentsDir = Join-Path -Path $PSScriptRoot -ChildPath "src\components\ui"

# Get all component files
$componentFiles = Get-ChildItem -Path $componentsDir -Filter "*.tsx" -File

# Remove unused components
foreach ($file in $componentFiles) {
    $componentName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    
    # Skip if component is used
    if ($usedComponents -contains $componentName) {
        Write-Host "Keeping used component: $componentName"
        continue
    }
    
    # Remove unused component
    Write-Host "Removing unused component: $componentName"
    Remove-Item -Path $file.FullName -Force
}

Write-Host "Cleanup complete!"
