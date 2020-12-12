// Kezzel's Gorge
//
// Made by Multarix

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-453-999": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-453-999-103-0": [{ type: "text", sub_type: "message", message_PT: "Esmagar Esquerda (Atras)", message_RU: "Удар (лево)" }],
		"s-453-999-104-0": [{ type: "text", sub_type: "message", message_PT: "Esmagar Direita (Atras)", message_RU: "Удар (право)" }],
		"s-453-999-105-0": [
			{ type: "text", sub_type: "message", message_PT: "Rochas | Esmagar", message_RU: "Удар (танк)", class_position: "tank" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 210, 14, 190, 0, 3000] }
		],
		"s-453-999-106-0": [
			{ type: "text", sub_type: "message", message_PT: "Explosao", message_RU: "Выстрел" },
			{ type: "text", sub_type: "message", message_PT: "Iframe!", message_RU: "Эвейд!", delay: 1800 }
		],
		"s-453-999-107-0": [{ type: "text", sub_type: "message", message_PT: "Chicote", message_RU: "Кнут" }],
		"s-453-999-116-0": [{ type: "text", sub_type: "message", message_PT: "Escudo", message_RU: "Щит" }],
		"s-453-999-119-0": [
			{ type: "text", sub_type: "message", message_PT: "Kaia's Shield", message_RU: "Кайа", class_position: "priest" },
			{ type: "text", sub_type: "message", message_PT: "Thrall of Protection", message_RU: "Кайа", class_position: "mystic" },
			{ type: "text", sub_type: "message", message_PT: "Derrubar", message_RU: "Кайа", class_position: "tank" },
			{ type: "text", sub_type: "message", message_PT: "Derrubar", message_RU: "Кайа", class_position: "dps" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 500, 0, 6000] }
		],
		"s-453-999-120-0": [
			{ type: "text", sub_type: "message", message_PT: "Onda Explosiva", message_RU: "AoE волны" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 200, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 390, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 590, 0, 7000] }
		]
	};
};