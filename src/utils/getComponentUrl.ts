export const getComponentUrl = (
  project_id: string,
  page_id: string,
  component_filename: string
) => {
  return `/preview/projects/${project_id}/pages/${page_id}/${component_filename}`;
};
