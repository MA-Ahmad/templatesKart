export const getProjectFileUrl = (
  project_id: string,
  page_id: string,
  component_filename: string
) => {
  return `/projects/preview/${project_id}/pages/${page_id}/${component_filename}`;
};

export const getComponentFileUrl = (componentId: string, fileName: string) => {
  return `/components/preview/${componentId}/${fileName}`;
};

export const sortFilesByIndexName = (files: string[]) => {
  return files.sort((a, b) => {
    if (['index.ts', 'index.tsx', 'index.js', 'index.jsx'].includes(a)) return -1;

    return 1;
  });
};
