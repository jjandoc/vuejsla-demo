const getEntityId = (entity) => entity.url.split("/").filter(Boolean).pop();

export default getEntityId;
